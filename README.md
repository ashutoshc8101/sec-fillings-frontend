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

## Technologies Used:
- [Edgar API](https://www.sec.gov/edgar/sec-api-documentation)
- [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)
- [Django](https://www.djangoproject.com/)
- [Angular](https://angular.io/)
