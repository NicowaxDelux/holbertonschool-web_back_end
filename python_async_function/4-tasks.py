#!/usr/bin/env python3
"""
 Let's execute multiple coroutines at the same time with async
"""

import asyncio
import typing
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    spawn wait_random n times with the specified max_delay.

    Parameters:
    n: int
    max_dalay: int

    Returns:
    return the list of all the delays (float values)
    """
    delays = []

    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for delay in await asyncio.gather(*tasks):
        inserted = False
        for i in range(len(delays)):
            if delay < delays[i]:
                delays.insert(i, delay)
                inserted = True
                break
        if not inserted:
            delays.append(delay)

    return delays
