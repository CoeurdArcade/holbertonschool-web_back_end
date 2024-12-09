#!/usr/bin/env python3
"""
Adds `get_page` method to `Server` class
"""
import csv
from typing import List, Tuple

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List[str]]:
        """Cached dataset
        """
        if self.__dataset is None:
            try:
                with open(self.DATA_FILE, newline='') as f:
                    reader = csv.reader(f)
                    dataset = [row for row in reader]
                self.__dataset = dataset[1:]
            except FileNotFoundError:
                raise FileNotFoundError(f"The file {self.DATA_FILE} does not exist.")
            except Exception as e:
                raise Exception(f"An error occurred while reading the file: {e}")

        return self.__dataset

    @staticmethod
    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        """Calculate start and end index range for a `page`, with `page_size`

        Args:
            page (int): The page number.
            page_size (int): The number of items per page.

        Returns:
            Tuple[int, int]: A tuple containing the start and end index.
        """
        nextPageStartIndex = page * page_size
        return nextPageStartIndex - page_size, nextPageStartIndex

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List[str]]:
        """
        Get items for the given page number.

        Args:
            page (int): The page number.
            page_size (int): The number of items per page.

        Returns:
            List[List[str]]: A list of lists (rows) if inputs are within range.
            List[List[str]]: An empty list if page and page_size are out of range.

        Raises:
            ValueError: If page or page_size is not a positive integer.
        """
        if not isinstance(page, int) or not isinstance(page_size, int):
            raise ValueError("Page and page_size must be integers.")
        if page <= 0 or page_size <= 0:
            raise ValueError("Page and page_size must be greater than 0.")

        startIndex, endIndex = self.index_range(page, page_size)
        return self.dataset()[startIndex:endIndex]

