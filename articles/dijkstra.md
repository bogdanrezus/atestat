---
title: "Algoritmul lui Dijkstra"
author: "Oprea Rareș"
date: "2022-12-30"
---

**Algoritmul Dijkstra** este un algoritm pentru găsirea celor mai scurte căi între noduri într-un grafic, care poate reprezenta, de exemplu, rețele rutiere. A fost conceput de informaticianul Edsger W. Dijkstra în 1956 și publicat trei ani mai târziu.

Algoritmul există în mai multe variante. Algoritmul original al lui Dijkstra a găsit cea mai scurtă cale între două noduri date, dar o variantă mai comună stabilește un singur nod ca nod "sursă" și găsește cele mai scurte căi de la sursă la toate celelalte noduri din grafic, producând un arbore cu cea mai scurtă cale.

## Explicație pe exemplu

Strategia algoritmului lui Dijkstra este una de tip Greedy și se ghidează dupa următoarele reguli:

1. Se menține un tablou d[], în care d[x] reprezintă costul minim curent (eventual infinit) al unui drum de la s la x;
2. Se menține o mulțime F de noduri k pentru care s-a determinat costul minim final d[k]
3. Inițial în F se adaugă doar nodul s, pentru care d[s]=0; pentru nodurile x adiacente cu s, d[x]=c[s,x], unde c[x,y] este costul arcului (x,y), iar pentru celelalte noduri costul d[] se inițializează cu INFINIT;
4. În mod repetat:

- alegem un nod din afara mulțimii F, nodul k pentru care costul drumului d[k] este minim și finit;
- adăugăm nodul găsit k în F;
- pentru fiecare arc (k,x) cu x din afara mulțimii F stabilim dacă acest arc se îmbunătățește costul d[x] (arcul relaxează drumul);

5. Alegerea acestor noduri se termină când toate nodurile au fost adăugate în F (s-au determinat costurile drumurile de la s la fiecare nod al grafului) sau când nu mai există noduri x din afara mulțimii F pentru care d[x] este finit;

![Explicatie algoritm](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif?20171021180030)

## Implementare

Un exemplu de implementare în C++:

```cpp
#define INFINIT 1000000000
...
//nodul sursa este s
...
for(i =1 ; i <= n ; i ++ )
{
	f[i] = 0;
	d[i] = a[s][i];
}

f[s] = 1, d[s] = 0;
d[0] = INFINIT; // pentru determinarea nodului cu costul minim
for(int k = 1 ; k < n ; ++k)
{
	int pmax = 0;
	for(i = 1 ; i <= n ; ++i)
		if(f[i] == 0 && d[i] < d[pmax])
			pmax = i;

	if(pmax > -1)
	{
		f[pmax] = 1;
		for(i = 1; i <= n ; ++i)
			if(f[i] == 0 && d[i] > d[pmax] + a[pmax][i])
				d[i] = d[pmax] + a[pmax][i];
	}
}
```

### Bibliografie

1. _<https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm>_
2. _<https://www.pbinfo.ro/articole/6135/algoritmul-lui-dijkstra>_
