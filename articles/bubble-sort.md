---
title: "Bubble Sort"
author: "Bogdan Rezuș"
date: "2022-12-09"
---

**Bubble sort** este un algoritm simplu de sortare ce parcurge în mod repetat vectorul element cu element, comparând elementul curent cu cel de după el și le interschimba valorile dacă nu respectă criteriul de sortare.

Acest algoritm nu este cel mai eficient mod de a sorta și, ca urmare, nu este prea des întâlnit în aplicații, însă este printre primii algoritmi pe care îi învățăm datorită simplității sale.

## Complexitate

Timp: **$O({n^2})$**  
Memorie: **$O(1)$**

## Exemplu pas cu pas

Fie vectorul **[5, 1, 4, 2, 8]**. Vrem să sortăm numerele crescător folosind bubble sort. La fiecare parcurgere, elementele scrise cu **bold** sunt comparate. Vom avea nevoie de 3 parcurgeri.

**Prima parcurgere**

[ **5 1** 4 2 8 ] &rarr; [ **1 5** 4 2 8 ]  
[ 1 **5 4** 2 8 ] &rarr; [ 1 **4 5** 2 8 ]  
[ 1 4 **5 2** 8 ] &rarr; [ 1 4 **2 5** 8 ]  
[ 1 4 2 **5 8** ] &rarr; [ 1 4 2 **5 8** ]

**A doua parcurgere**

[ **1 4** 2 5 8 ] &rarr; [ **1 4** 2 5 8 ]  
[ 1 **4 2** 5 8 ] &rarr; [ 1 **2 4** 5 8 ]  
[ 1 2 **4 5** 8 ] &rarr; [ 1 2 **4 5** 8 ]  
[ 1 2 4 **5 8** ] &rarr; [ 1 2 4 **5 8** ]

Acum, vectorul este deja sortat, însă algoritmul nu știe dacă și-a terminat treaba. Mai avem nevoie de încă o parcurgere unde nu facem nicio interschimbare pentru a ști că am terminat de sortat.

**A treia parcurgere**

[ **1 2** 4 5 8 ] &rarr; [ **1 2** 4 5 8 ]  
[ 1 **2 4** 5 8 ] &rarr; [ 1 **2 4** 5 8 ]  
[ 1 2 **4 5** 8 ] &rarr; [ 1 2 **4 5** 8 ]  
[ 1 2 4 **5 8** ] &rarr; [ 1 2 4 **5 8** ]

## Implementare

Bubble sort se poate implementa astfel în C++:

```cpp
// v: Vectorul pe care îl sortăm (indexat de la 0)
// n: Numărul de elemente
void BubbleSort(int v[], int n)
{
    bool sortat = false;

    while (!sortat)
    {
        // Presupunem că vectorul este sortat
        sortat = true;

        for (int i = 0; i < n - 1; i++)
        {
            if (v[i] > v[i + 1])
            {
                // În cazul în care găsim două elemente
                // care nu sunt în ordine crescătoare
                // putem spune că vectorul încă nu este sortat
                sortat = false;

                // Facem interschimbarea
                int aux = v[i];
                v[i] = v[i + 1];
                v[i + 1] = aux;
            }
        }
    }
}
```
