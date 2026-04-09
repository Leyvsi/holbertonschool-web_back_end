#!/usr/bin/env python3
"""
This module provides a function to sum a list of integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Takes a list of mixed integers and floats and returns their sum.

    Args:
        mxd_lst (List[Union[int, float]]): A list containing ints and floats.

    Returns:
        float: The sum of the elements as a float.
    """
    return float(sum(mxd_lst))
