#!/usr/bin/env python3
"""
This module defines an asynchronous generator that yields random numbers.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that loops 10 times, waits 1 second asynchronously
    each time, and yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
