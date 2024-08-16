#!/usr/bin/env python3
"""
Tasks
"""


import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int):
    """
    Funtion task_wait_random that takes an integer
    max_delay and returns a asyncio.Task.

    Parameters:
    max_delay: int

    Returns:
    returns a asyncio.Task
    """
    return asyncio.Task(wait_random(max_delay))
