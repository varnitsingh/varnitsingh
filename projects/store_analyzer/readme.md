[# Shopify Store Analyzer](https://github.com/varnitsingh/store_analyzer)

A Streamlit app to **scrape, analyze, and visualize product data** from any Shopify store.  
Simply enter a store URL, filter products with an interactive UI, and explore insights on pricing, categories, SEO, and more.

---

## ✨ Features
- 🛒 **Shopify Product Scraper** – fetch products via Shopify’s JSON endpoint  
- 🎛 **Filter Drawer** – filter products by:
  - Availability (in stock / out of stock)  
  - Tags  
  - Product Type  
  - Price Range  
- 📊 **Product Insights** – see breakdown of:
  - Most expensive products  
  - Products grouped by category/type  
  - Variants  
- 💰 **Pricing Analysis** – visualize:
  - Price distribution  
  - Average price by category  
  - Discounts  
- 🔍 **SEO & Metadata Audit** – check:
  - Homepage meta tags  
  - Product title lengths  
  - Missing image alt text  
- 📑 **Export Data** – download filtered tables as CSV  

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
pip install -r requirements.txt
````

### 2. Run the app

```bash
streamlit run app.py
```

---

## 📌 Usage

1. Enter a Shopify store URL (e.g., `https://natalino.co`)
2. Click **Scrape Products**
3. Apply filters from the **Filter Drawer** (availability, tags, type, price)
4. Navigate across dashboard tabs to explore insights

---

## 📂 Project Structure

```
.
├── app.py          # Main Streamlit app
├── scraper.py      # Shopify scraper logic
├── filters.py      # Filtering UI & logic
├── utils.py        # Helper functions
├── data/           # Local JSON cache (ignored in git)
└── requirements.txt
```

---

## 📝 Notes

* The scraper can also read from local JSON files for debugging
* Replace with live requests for production use
* For large stores, scraping may take a while

---

## 📄 License

[MIT](./LICENSE)