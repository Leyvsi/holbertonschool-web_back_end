#!/usr/bin/env python3
"""
This module provides a function to calculate the length of elements
within an iterable object.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences and returns a list of tuples.
    Each tuple contains an element from the iterable and its length.

    Args:
        lst (Iterable[Sequence]): An object that can be iterated over,
        containing elements that have a defined length (sequences).

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples (element, length).
    """
    return [(i, len(i)) for i in lst]
