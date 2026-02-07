from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma
from dotenv import load_dotenv
import os

load_dotenv()

data = "Data\DCP36.pdf"
PERSIST_DIR = "./chroma_db"
COLLECTION_NAME = "KIDNEY_DISEASES"
CHUNK_SIZE = 500
CHUNK_OVERLAP = 50
EMBEDDING_MODEL = "text-embedding-3-large"



def load_and_split_documents(data: str = data):
    loader = PyPDFLoader(data)
    docs = loader.load()
    
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP
    )
    chunks = text_splitter.split_documents(docs)
    print(f"Created {len(chunks)} chunks")
    return chunks



def create_vectorstore(chunks):
    print(f"Creating vector store at {PERSIST_DIR}...")
    embeddings = OpenAIEmbeddings(model=EMBEDDING_MODEL)
    
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=PERSIST_DIR,
        collection_name=COLLECTION_NAME
    )
    print("Vector store created successfully!")
    return vectorstore



def vectorstore_exists():
    return os.path.exists(PERSIST_DIR) and os.listdir(PERSIST_DIR)