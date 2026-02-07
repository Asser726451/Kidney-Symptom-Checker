from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_chroma import Chroma
from langchain_classic.chains.retrieval import create_retrieval_chain
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

from fill_db import (
    PERSIST_DIR as CHROMA_PATH,
    COLLECTION_NAME,
    EMBEDDING_MODEL,
    vectorstore_exists,
    create_vectorstore,
    load_and_split_documents
)

load_dotenv()


LLM_MODEL = "gpt-4o-mini"
RETRIEVAL_K = 4

print(vectorstore_exists())


def setup_rag_chain():
    if vectorstore_exists()==False:
        print(f"Vector store not found at {CHROMA_PATH}")
        chunks = load_and_split_documents()
        create_vectorstore(chunks)

    embeddings = OpenAIEmbeddings(model=EMBEDDING_MODEL)
    

    print(f"Loading vector store from {CHROMA_PATH}...")
    vectorstore = Chroma(
        persist_directory=CHROMA_PATH,
        embedding_function=embeddings,
        collection_name=COLLECTION_NAME
    )

    print("vector store loaded successfully! length:", vectorstore._collection.count(), "documents.")
    retriever = vectorstore.as_retriever(search_kwargs={"k": RETRIEVAL_K})

    llm = ChatOpenAI(
        model=LLM_MODEL,
        temperature=0.5
    )
    
    system_prompt = (
        '''
        You are a helpful assistant answering questions based on the provided context. 
        Answer ONLY from the provided context. 
        If the context doesn't contain the answer, say "I don't have that information in my knowledge base."

        Format your answers as clear bullet points for readability.

        Context:
        {context}
        '''
    )
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        ("human", "{input}")
    ])
    
    qa_chain = create_stuff_documents_chain(llm, prompt)
    rag_chain = create_retrieval_chain(retriever, qa_chain)
    
    return rag_chain

def ask_question(rag_chain, query: str):
    try:
        result = rag_chain.invoke({"input": query})
        return result["answer"]
    except Exception as e:
        return f"Error processing question: {str(e)}"

def interactive_mode(rag_chain):
    """Interactive question-answering loop."""
    print("=" * 60)
    print("Diseases of the Kidney and the Urinary System Knowledge Base - Ask me anything!")
    print("=" * 60)
    print("Type 'exit', 'quit', or 'q' to stop\n")
    
    while True:
        query = input("Your question: ").strip()
        
        if not query:
            continue
            
        if query.lower() in ["exit", "quit", "q"]:
            print("\nGoodbye!")
            break
        
        print("\nThinking...\n")
        answer = ask_question(rag_chain, query)
        print(f"Answer: {answer}\n")
        print("-" * 60)

def main():
    rag_chain = setup_rag_chain()
    interactive_mode(rag_chain)

if __name__ == "__main__":
    main()


