#!/usr/bin/env python3
"""
Complex types - string and int/float to tuple
"""


import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """
    Parameters:
    K: str
    v: tuple of int/float

    Return:
    Tuple of str/float
    """
    return (k, v**2)
