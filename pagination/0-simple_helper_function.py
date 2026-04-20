#!/usr/bin/env python3
"""
Module providing a simple helper function to calculate pagination indexes.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple containing a start index and an end index for pagination.
    """
    start = (page - 1) * page_size
    return (start, start + page_size)
