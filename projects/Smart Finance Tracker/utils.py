import pandas as pd
import os

DATA_FILE = "transactions.csv"

def load_data():
    if os.path.exists(DATA_FILE):
        return pd.read_csv(DATA_FILE)
    else:
        return pd.DataFrame(columns=["Date", "Amount", "Type", "Category", "Notes"])

def save_data(df):
    df.to_csv(DATA_FILE, index=False)