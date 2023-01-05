---
title: "Merge Sort"
author: "Rareș Oprea"
date: "2022-12-30"
---

**MergeSort** (sau **Sortarea prin interclasare**) este un algoritm de sortare eficient, cu scop general, și bazat pe comparație. Cele mai multe implementări produc o sortare stabilă, ceea ce înseamnă că ordinea elementelor egale este aceeași în intrare și ieșire.

Majoritatea implementărilor de tip **quicksort** nu sunt stabile, ceea ce înseamnă că ordinea relativă a elementelor de sortare egală nu este păstrată.

## Complexitate

Timp: **$O({n log n})$**  
Memorie: **$O(n)$**

## Explicație pe exemplu

Algoritmul functionează sub forma a 3 pași foarte simpli:

1. Dacă este doar un element din listă, acesta este deja sortat, se intoarce.
2. Se împarte lista recursiv în două jumătăți până când nu mai poate fi împărțită.
3. Se îmbină listele mai mici într-o listă nouă în ordine sortată.

![Explicatie Sortare](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

## Implementare

Un exemplu de implementare în C++:

```cpp
void MergeSort(int v[], int st, int dr)
{
	if(st < dr)
	{
		int m = (st + dr) / 2;
		MergeSort(v, st , m);
		MergeSort(v, m + 1 , dr);
		//Interclasare
		int i = st, j = m + 1, k = 0;
		while( i <= m && j <= dr )
			if( v[i] < v[j])
				tmp[++k] = v[i++];
			else
				tmp[++k] = v[j++];
		while(i <= m)
			tmp[++k] = v[i++];
		while(j <= dr)
			tmp[++k] = v[j++];
		for(i = st , j = 1 ; i <= dr ; i ++ , j ++)
			v[i] = tmp[j];
	}
}
```

### Bibliografie

1. _<https://en.wikipedia.org/wiki/Merge_sort>_
2. _<https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2>_
3. _<https://www.pbinfo.ro/articole/7667/sortarea-prin-interclasare>_
