---
title: "Căutare Binară"
author: "Bogdan Rezuș"
date: "2022-12-10"
---

**Căutarea binară** este un algoritm de căutare care determină poziția unui element într-un vector **sortat crescător**. Căutarea binară compară elementul căutat cu elementul din mijlocul vectorului. Dacă nu sunt egale, atunci se elimină jumătatea în care elementul nu poate exista. Acești pași se repetă până când se găsește valoarea sau până când rămânem fără elemente. Dacă am rămas fără elemente, atunci elementul căutat nu există în vector.

Căutarea binară este mult mai rapidă decât căutarea secvențiala, însă vectorul trebuie să fie sortat.

## Complexitate

Timp: **$O({log(n)})$**  
Memorie: **$O(1)$**

## Exemplu pas cu pas

Fie vectorul sortat crescător **[ 1 3 4 6 8 10 13 19 23 33 35 41 59 62 68 75 ]**. Vrem să căutăm numărul **35** folosind căutarea binară. La fiecare pas, secvența în care căutăm este scrisă cu **bold**.

**Primul pas**

[ **1 3 4 6 8 10 13 19 23 33 35 41 59 62 68 75** ]

**$m = [\frac{s + d}{2}]$**, unde **$s$** este poziția **primului** element din secvență, iar **$d$** este poziția **ultimului** element din secvență.

Elementul din mijloc este **19**, care este mai mic decât **35**. Știm că vectorul este sortat crescător, deci **35**, dacă există, se va afla în dreapta lui **19**.

**Al doilea pas**

[ 1 3 4 6 8 10 13 19 **23 33 35 41 59 62 68 75** ]

Elementul din mijloc este **41**, care este mai mare decât **35**. Vom căuta la stânga lui **41**.

**Al treilea pas**

[ 1 3 4 6 8 10 13 19 **23 33 35** 41 59 62 68 75 ]

Elementul din mijloc este **33**, care este mai mic decât **35**. Vom căuta la dreapta lui **33**.

**Al patrulea pas**

[ 1 3 4 6 8 10 13 19 23 33 **35** 41 59 62 68 75 ]

Elementul din mijloc este chiar **35**, cel pe care îl căutăm.

### Observație

În exemplul de mai sus am făcut doar **4** pași. Dacă foloseam căutarea secvențiala aveam nevoie de **11** pași.

## Implementare

Un exemplu de implementare în C++:  
_(unde elementele sunt numere întregi)_

```cpp
// v: Vectorul pe care îl sortăm (indexat de la 0)
// n: Numărul de elemente din v
// x: Elementul pe care îl căutăm

int CautareBinara(int v[], int n, int x)
{
    // Inițial, secvența în care căutăm este [0...n-1]
    int s = 0, d = n - 1;

    // Cât timp avem elemente
    while (s <= d)
    {
        // Calculăm mijlocul
        int m = (s + d) / 2;

        if (v[m] == x)
        {
            // Dacă l-am găsit pe x îi returnăm poziția
            return m;
        }
        else
        {
            // Dacă elementul din mijloc < x,
            // atunci vom căuta în stânga lui
            if (v[m] < x) s = m + 1;

            // Elementul din mijloc > x,
            // deci vom căuta în dreapta lui
            else d = m - 1;
        }
    }

    // Dacă am ajuns aici, atunci x nu există în v
    return -1;
}
```

Căutarea binară se poate implementa și recursiv:

```cpp
// v: Vectorul pe care îl sortăm (indexat de la 0)
// x: Elementul pe care îl căutăm
// s: Poziția primului element din secvența în care căutăm
// d: Poziția ultimului element din secvența în care căutăm

int CautareBinara(int v[], int x, int s, int d)
{
    // Dacă s > d, atunci nu mai avem elemente
    if (s > d) return -1;

    // Calculăm mijlocul
    int m = (s + d) / 2;

    // Dacă l-am găsit pe x îi returnăm poziția
    if (x == v[m]) return m;

    // Dacă elementul din mijloc < x,
    // atunci vom căuta în stânga lui
    if (x < v[m]) return CautareBinara(v, x, s, m - 1);

    // Elementul din mijloc > x,
    // deci vom căuta în dreapta lui
    return CautareBinara(v, x, m + 1, d);
}
```

### Bibliografie

1. _<https://en.wikipedia.org/wiki/Binary_search_algorithm>_
