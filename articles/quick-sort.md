---
title: "Sortarea QuickSort"
author: "Oprea Rareș"
date: "2022-12-30"
---

**Quicksort** este un algoritm de sortare eficient, cu scop general. Acesta funcționează prin selectarea unui element "pivot" din vector și împărțirea celorlalte elemente în două sub-mulțimi, în funcție de faptul dacă acestea sunt mai mici sau mai mari decât pivotul. Apoi sub-multimile sunt sortate recursiv, necesitând puțină memorie suplimentară.

Majoritatea implementărilor de tip **quicksort** nu sunt stabile, ceea ce înseamnă că ordinea relativă a elementelor de sortare egală nu este păstrată.

## Complexitate

Timp: **$O({n log n})$**  
Memorie: **$O(1)$**

## Explicație pe exemplu

Algoritmul funcționează prin împărțirea vectorului în două sub-mulțimi mai mici, cu valori mai mici pe o parte și mai mari pe cealaltă. Această partiționare poate fi apoi aplicată recursiv la sub-mulțimi pentru a forma sub-vectori partiționați chiar mai mici. Cazul de bază pentru recursivitate este un sub-vector de dimensiunea unu sau dimensiunea zero, care e deja sortat prin definiție. La fel ca algoritmul de sortare **Merge Sort**, Quicksort preia abordarea "Divide et Impera" în procesarea datelor.

![Explicatie sortare ](https://images.deepai.org/glossary-terms/a5228ea07c794b468efd1b7f758b9ead/Quicksort.png)

## Implementare

Un exemplu de implementare în C++:  
_(unde elementele sunt numere întregi pe care le sortăm crescător)_

```cpp
void QuickSort(int v[], int st, int dr)
{
	if(st < dr)
	{
		//pivotul este inițial v[st]
		int m = (st + dr) / 2;
		int aux = v[st];
		v[st] = v[m];
		v[m] = aux;
		int i = st , j = dr, d = 0;
		while(i < j)
		{
			if(v[i] > v[j])
			{
				aux = v[i];
				v[i] = v[j];
				v[j] = aux;
				d = 1 - d;
			}
			i += d;
			j -= 1 - d;
		}
		QuickSort(v, st , i - 1);
		QuickSort(v, i + 1 , dr);
	}
}
```

### Bibliografie

1. _<https://en.wikipedia.org/wiki/Bubble_sort>_
2. _<https://deepai.org/machine-learning-glossary-and-terms/quicksort-algorithm>_
3. _<https://www.pbinfo.ro/articole/7666/quicksort>_
