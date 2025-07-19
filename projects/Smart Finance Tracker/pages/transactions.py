import streamlit as st
import pandas as pd
from datetime import date

def show():
    st.title("💰 Transactions")

    # Initialize session state
    if "transactions" not in st.session_state:
        st.session_state.transactions = []

    # ---- Add Transaction Form ----
    st.subheader("➕ Add New Transaction")
    with st.form("transaction_form", clear_on_submit=True):
        t_type = st.radio("Type", ["Income", "Expense"], horizontal=True)
        category = st.text_input("Category (e.g. Salary, Groceries, Rent)")
        amount = st.number_input("Amount (₹)", min_value=0.0, format="%.2f")
        t_date = st.date_input("Date", value=date.today())

        submitted = st.form_submit_button("Add Transaction")
        if submitted:
            if not category or amount == 0:
                st.warning("Please fill all the fields properly.")
            else:
                new_transaction = {
                    "Type": t_type,
                    "Category": category,
                    "Amount": amount,
                    "Date": t_date.strftime("%Y-%m-%d")
                }
                st.session_state.transactions.append(new_transaction)
                st.success("Transaction added successfully!")

    # ---- Display Transactions ----
    if st.session_state.transactions:
        st.subheader("📋 All Transactions")
        df = pd.DataFrame(st.session_state.transactions)
        st.session_state.data = df  # For use in other pages
        st.dataframe(df, use_container_width=True)

        # Delete section
        st.markdown("### 🗑️ Delete Transaction")
        selected_index = st.selectbox(
            "Select a transaction to delete",
            options=range(len(df)),
            format_func=lambda i: f"{df.iloc[i]['Date']} | {df.iloc[i]['Type']} | ₹{df.iloc[i]['Amount']} | {df.iloc[i]['Category']}"
        )
        if st.button("Delete Selected Transaction"):
            del st.session_state.transactions[selected_index]
            st.success("Transaction deleted successfully!")
    else:
        st.info("No transactions added yet.")
        st.session_state.data = pd.DataFrame(columns=["Type", "Category", "Amount", "Date"])
