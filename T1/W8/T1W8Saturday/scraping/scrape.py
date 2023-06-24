

# 1ST TEACHING WAY OF SOUP

import requests
from bs4 import BeautifulSoup

class Scrape:
    def __init__(self, url):
        self.url = url
        self.html_soup()

        # Above def is only the generic
        # below is not the generic

    def html_soup(self):
        response = requests.get(self.url)
        self.soup = BeautifulSoup(response.content, 'html.parser')

    def stats(self, state):
        return {
            'average_7d': self.average_7d(),
            'active_case': self.active_case(),
            'percent_new_case': self.percent_new_case(),
            'case_decreased': self.case_decreased_or_not(),
        }

    def average_7d(self):
        pass

    def active_case(self):
        pass

    def percent_new_case(self):
        pass

    def case_decreased_or_not(self):
        pass



# - user which states
#     - 7d average
#     - active cases
# - percent of new cases with respect active cases
# - decrease or increase
