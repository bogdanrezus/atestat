---
title: "Al N-lea Termen Fibonacci"
author: "Bogdan Rezuș"
date: "2022-12-10"
---

În matematică, **numerele Fibonacci**, deobicei notate **$F_n$** formează **șirul Fibonacci**, în care fiecare număr este suma celor două de dinainte. Primele două elemente sunt **0** și **1**.

**$F_0 = 0$**

**$F_1 = 1$**

**$F_n = F_{n-1} + F_{n-2}$**

## Prima soluție

Putem să folosim direct relația de recurență:

```cpp
int Fibonacci(int n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

Soluția de mai sus nu este foarte eficientă. Funcția va face multe recalculări, iar pentru un $n$ mare, va umple stiva și aplicația se va opri.

## A doua soluție

```cpp
int Fibonacci(int n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;

    int a, b, c;
    a = 0;
    b = 1;

    for (int i = 3; i <= n; i++)
    {
        // c va fi al i-lea termen Fibonacci
        c = a + b;

        // a va fi al (i-2)-lea termen Fibonacci
        a = b;

        // b va fi al (i-1)-lea termen Fibonacci
        b = c;
    }

    return c;
}
```

Această soluție este mult mai bună. Evită recalculările de la prima soluție și va funcționa și pentru un $n$ mare.

**Are complexitate de timp $O(n)$ și complexitate de memorie $O(1)$.**

### Bibliografie

1. _<https://en.wikipedia.org/wiki/Fibonacci_number>_
