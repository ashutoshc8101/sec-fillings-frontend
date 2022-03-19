# SEC Filings Analyzer
SEC Filings analyzer

## Prerequisites
Install Node.js which includes Node Package Manager

## Installation

1. Clone this repository on local machine
```
git clone https://github.com/ashutoshc8101/sec-fillings-frontend.git
```

2. Install dependencies using npm
```
npm install
```

3. Run local server using `ng serve`

## Problem Statement
The SEC’s EDGAR database contains terabytes of documents and data, including press releases,
annual corporate filings, executive employment agreements, and investment company
holdings. While EDGAR has existed for over twenty years, scholars have had difficulty
conducting or reproducing research based on EDGAR data. Researchers often spend a lot of
time and money developing and redeveloping code to retrieve and parse EDGAR data with no
common bottom-up framework.

## Functionalities
- Metrics of SaaS companies can be viewed on an interactive web dashboard.
  
- Side by side comparison of two companies.
- Rating of a company in terms of Profitability, Investability and Growth.
  ![image](https://user-images.githubusercontent.com/24855641/159119143-ef16b0c3-0d90-42f7-be31-c13ef8f3ce56.png)

- Most viewed SaaS companies are available on search page for easier access.
  ![image](https://user-images.githubusercontent.com/24855641/159119153-be9755ac-c1f2-43a2-a75e-6e799a920123.png)

- SaaS companies can be marked as favourites.
  ![image](https://user-images.githubusercontent.com/24855641/159119341-b6dbccbb-c100-4a36-9c8f-c94f4b952e3f.png)

## Architecture Overview:
![flow_diagram_digital_alpha (1)](https://user-images.githubusercontent.com/24855641/159120589-f75b97fa-774d-4a2e-b317-7cd86ee4836d.png)


- The source of metrics in our app is EDGAR. Edgar API is used to scrap metrics.
- The scrapped forms (10K, 10Q, 8K) are stored as csv files.
- A scheduled cron job reads these scrapped csv files, obtain neccessary metrics and seeds them into the backend database.
- The django backend reads the database and provides the necessary data to the frontend. It also powers user authentication, search and favourites functionalities.
- Frontend written using angular provides a fluid dashboard for easy viewing and comparision of SaaS metrics.

## Technologies Used:
- [Edgar API](https://www.sec.gov/edgar/sec-api-documentation)
- [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)
- [Django](https://www.djangoproject.com/)
- [Angular](https://angular.io/)
