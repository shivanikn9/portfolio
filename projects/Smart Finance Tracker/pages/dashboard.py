import streamlit as st
import pandas as pd

def show():
    st.subheader("📊 Dashboard")
    st.write("Welcome to your personal finance dashboard!")

    if "transactions" not in st.session_state or not st.session_state.transactions:
        st.info("No transactions available.")
        return

    df = pd.DataFrame(st.session_state.transactions)

    # Month-wise Summary
    df["Month"] = pd.to_datetime(df["Date"]).dt.to_period("M").astype(str)
    summary = df.groupby(["Month", "Type"])["Amount"].sum().unstack(fill_value=0).reset_index()

    st.markdown("### 🗓️ Monthly Overview")
    st.dataframe(summary, use_container_width=True)
