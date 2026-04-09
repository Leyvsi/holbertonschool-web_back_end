#!/usr/bin/env python3
"""
This module provides a coroutine that uses an async comprehension
to collect values from an async generator.
"""
from typing import List

# Importation du module précédent
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers from async_generator using an async
    comprehension and returns them as a list.

    Returns:
        List[float]: A list of 10 random float numbers.
    """
    return [i async for i in async_generator()]
