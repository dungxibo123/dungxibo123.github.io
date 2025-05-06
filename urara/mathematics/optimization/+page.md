---
title: Convex Optimization - Basics convex functions and sets
created: 2024-12-16
tags: ['math', 'convex', 'optimization']
---

We first going on to a most basic definition of convex-related stuffs - **Convex set**. Basically, a set called convex if and only if every single point lie between two points of the current set is also in that set.

- Circle is a convex set, oval is a convex set, square is a convex set.
- The teeth shape is not a convex set

**Definition 1.1** (Convex sets): Let $S$ be a vector space defined on $\mathbb{R}^{n}$. $S$ is called convex if for any $a,b\in S$ and $\lambda\in[0,1]$, the point $c=\lambda a+(1-\lambda)b$ is also an element of $S$.



Next, we are going to understand what exactly is "epigraph". Intuitively, **epigraph** of a function is the set of all the point properly above (can be line on the function curve) the function value.

- For example if $f(x) = x^2$ then $(0,0), (0,1), (1,1), (1, 2), ...$ is inside the epigraph of $f$. $(0, -0,2), (-1,0)$ is not inside the set. See the intuitive example in the image below

**Definition 1.2** (Epigraph of a function):  Let $f: X \to \mathbb{R}$ with $X$ as the domain of $f$. The epigraph of $f$ is defined as:  
$$
\text{epi}(f) = \{(x,t) \in X \times \mathbb{R} : f(x) \leq t\}
$$  
Check if this is a closed set for **lower semi-continuous** functions.

**Definition 1.3** (Convex functions):  A function $f: X \to \mathbb{R}$ is convex if for any $x_1, x_2 \in X$ and $\lambda \in [0,1]$:  
$$
f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2)
$$

**Remark 1.4** (Epigraph of convex functions): If $f: X \to \mathbb{R}$ is convex, then $\text{epi}(f)$ is a **closed** convex set. [Proof](https://math.stackexchange.com/questions/258511/prove-that-every-convex-function-is-continuous).

*Proof.*  
Take $(x_1, t_1), (x_2, t_2) \in \text{epi}(f)$. For $\lambda \in [0,1]$:  
$$
\lambda(x_1, t_1) + (1-\lambda)(x_2, t_2) = (\lambda x_1 + (1-\lambda)x_2, \lambda t_1 + (1-\lambda)t_2)
$$  
By the definition of the epigraph:  
$$
\lambda t_1 + (1-\lambda)t_2 \geq \lambda f(x_1) + (1-\lambda)f(x_2) \geq f(\lambda x_1 + (1-\lambda)x_2)
$$  
Thus, the convex combination lies in $\text{epi}(f)$, proving it is convex and closed. $\square$

**Definition 1.5** (Normal cones to convex sets):  
Let $\Omega \subseteq \mathbb{R}^n$ be convex and $\bar{x} \in \Omega$. The normal cone at $\bar{x}$ is:  
$$
\mathcal{N}(\Omega, \bar{x}) = \{v \in \mathbb{R}^n : \langle v, x - \bar{x} \rangle \leq 0 \quad \forall x \in \Omega\}
$$

**Proposition 1.6** (Convexity of normal cones):  
$\mathcal{N}(\Omega, \bar{x})$ is a convex set.

*Proof.*  
For $v_1, v_2 \in \mathcal{N}(\Omega, \bar{x})$ and $\lambda \in [0,1]$:  
$$
\langle v_1, x - \bar{x} \rangle \leq 0, \quad \langle v_2, x - \bar{x} \rangle \leq 0 \quad \forall x \in \Omega
$$  
Then:  
$$
\langle \lambda v_1 + (1-\lambda)v_2, x - \bar{x} \rangle \leq 0 \quad \forall x \in \Omega
$$  
Hence, $\lambda v_1 + (1-\lambda)v_2 \in \mathcal{N}(\Omega, \bar{x})$. $\square$

**Theorem 1.7** (Normal cone to intersection of convex sets):  
If $\Omega_1, \Omega_2$ are convex sets with $\text{ri}(\Omega_1) \cap \text{ri}(\Omega_2) \neq \emptyset$, then:  
$$
\mathcal{N}(\bar{x}, \Omega_1 \cap \Omega_2) = \mathcal{N}(\bar{x}, \Omega_1) + \mathcal{N}(\bar{x}, \Omega_2)
$$

**Theorem 1.8** (First-order condition for convexity):  
A differentiable function $f: X \to \mathbb{R}$ on a convex set $X$ is convex if and only if:  
$$
f(y) \geq f(x) + \langle \nabla f(x), y - x \rangle \quad \forall x, y \in X
$$

*Proof.*  
For $\lambda \in [0,1]$, let $z = \lambda y + (1-\lambda)x$. Rearranging the convexity inequality:  
$$
\frac{f(z) - f(x)}{\lambda} \leq f(y) - f(x)
$$  
Taking $\lambda \to 0$, the left-hand side becomes $\langle \nabla f(x), y - x \rangle$, proving:  
$$
\langle \nabla f(x), y - x \rangle \leq f(y) - f(x)
$$  
Conversely, if the inequality holds, multiplying by $\lambda$ and $(1-\lambda)$ for $x, y$ gives:  
$$
\lambda f(x) + (1-\lambda)f(y) \geq f(z) \square
$$  

**Theorem 1.9** (Second-order characterization):  
A twice differentiable $f: X \to \mathbb{R}$ is convex if and only if its Hessian $\nabla^2 f(x)$ is positive semi-definite for all $x \in X$.
