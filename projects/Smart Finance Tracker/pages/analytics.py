import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

def show():
    st.subheader("📈 Analytics")

    # Check if data exists
    if "transactions" not in st.session_state or not st.session_state.transactions:
        st.warning("No transactions available for analysis.")
        return

    # Convert session data to DataFrame
    df = pd.DataFrame(st.session_state.transactions)

    # Clean and convert Amount to numeric
    df["Amount"] = df["Amount"].astype(str).str.replace(",", "")
    df["Amount"] = pd.to_numeric(df["Amount"], errors="coerce").fillna(0)

    # Basic totals
    income = df[df["Type"] == "Income"]["Amount"].sum()
    expense = df[df["Type"] == "Expense"]["Amount"].sum()
    balance = income - expense

    # Display metrics
    col1, col2, col3 = st.columns(3)
    col1.metric("Total Income", f"₹ {income:,.2f}")
    col2.metric("Total Expenses", f"₹ {expense:,.2f}")
    col3.metric("Balance", f"₹ {balance:,.2f}")

    # Category-wise Expense Pie Chart
    st.markdown("### 📊 Category-wise Spending")
    exp_df = df[df["Type"] == "Expense"]
    if not exp_df.empty:
        fig, ax = plt.subplots()
        exp_df.groupby("Category")["Amount"].sum().plot.pie(
            autopct="%1.1f%%", ax=ax, startangle=90
        )
        ax.set_ylabel("")
        st.pyplot(fig)
    else:
        st.info("No expenses available to show pie chart.")
