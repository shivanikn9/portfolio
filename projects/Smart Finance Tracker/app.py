import streamlit as st
from pages import dashboard, transactions, analytics
from utils import load_data, save_data

st.set_page_config(page_title="Smart Finance Tracker", layout="wide")

# Load or initialize data
if "data" not in st.session_state:
    st.session_state.data = load_data()

# Navigation
st.markdown("<h1 style='text-align: center;'>Smart Finance Tracker</h1>", unsafe_allow_html=True)
st.markdown("---")
menu = ["Dashboard", "Transactions", "Analytics"]
choice = st.sidebar.selectbox("Navigate", menu)

if choice == "Dashboard":
    dashboard.show()
elif choice == "Transactions":
    transactions.show()
elif choice == "Analytics":
    analytics.show()


# Footer
st.markdown("---")
st.markdown("<footer style='text-align: center;'>Built with ❤️ by Nithin V S</footer>", unsafe_allow_html=True)