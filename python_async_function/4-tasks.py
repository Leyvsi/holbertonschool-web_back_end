#!/usr/bin/env python3
"""
This module contains an async routine task_wait_n that uses task_wait_random.
"""
import asyncio
from typing import List

# Import correct selon la structure des fichiers précédents
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): Number of tasks to spawn.
        max_delay (int): Maximum delay for each task.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays: List[float] = []
    tasks: List[asyncio.Task] = []

    # On appelle task_wait_random qui nous renvoie déjà une asyncio.Task
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    # On récupère les résultats au fur et à mesure (ordre chronologique)
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
