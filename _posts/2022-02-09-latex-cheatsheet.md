---
layout: post
title: LaTex Cheatsheet
tags: tutorial open-source
---

This is a simple LaTex Cheatsheet for writing math symbols and formulas in Jupyter Notebook, which uses [MathJax](https://www.mathjax.org/) to render LaTex inside the Markdown cells.

- For inline mode, enclose the formula in `$...$`
- For display mode (formulas will be centered and displayed in a separate line), enclose the formula in `$$...$$`

|  $$y^{x}$$ | `y^{x}`  | $$y_{x}$$  | `y_{x}`  |
|   $$\frac{x}{y}$$   |   `\frac{x}{y}`| $$\sum_{k=1}^n$$  | `\sum_{k=1}^n`  |
|   $$\sqrt[n]{x}$$   |   `\sqrt[n]{x}`| $$\prod_{k=1}^n$$  | `\prod_{k=1}^n`  |

|   $$\leq$$   | `\leq`| $$\geq$$   | `\geq`  |   $$\neq$$   | `\neq`| $$\approx$$   | `\approx`  |
|   $$\times$$   | `\times`| $$\div$$   | `\div`  |  $$\pm$$   | `\pm`| $$\cdot$$   | `\cdot`  |
|   $$x^{\circ}$$   | `x^{\circ}`| $$\circ$$   | `\circ`  |   $$x^\prime$$   | `x^\prime`| $$\cdots$$   | `\cdots`  |
|   $$\infty$$   | `\infty`| $$\neg$$   | `\neg`  |   $$\wedge$$   | `\wedge`| $$\vee$$   | `\vee`  |
|   $$\supset$$   | `\supset`| $$\forall$$   | `\forall`  |   $$\in$$   | `\in`| $$\rightarrow$$   | `\rightarrow`  |
|   $$\subset$$   | `\subset`| $$\exists$$   | `\exists`  |   $$\notin$$   | `\notin`| $$\Rightarrow$$   | `\Rightarrow`  |
|   $$\cup$$   | `\cup`| $$\cap$$   | `\cap`  |   $$\mid$$   | `\mid`| $$\Leftrightarrow$$   | `\Leftrightarrow`  |
|   $$\dot a$$   | `\dot a`| $$\hat a$$   | `\hat a`  |   $$\bar a$$   | `\bar a`| $$\tilde a$$   | `\tilde a`  |

|   $$\alpha$$   | `\alpha`| $$\beta$$   | `\beta`  |   $$\gamma$$   | `\gamma`| $$\delta$$   | `\delta`  |
|   $$\epsilon$$   | `\epsilon`| $$\zeta$$   | `\zeta`  |   $$\eta$$   | `\eta`| $$\varepsilon$$   | `\varepsilon`  |
|   $$\theta$$   | `\theta`| $$\iota$$   | `\iota`  |   $$\kappa$$   | `\kappa`| $$\vartheta$$   | `\vartheta`  |
|   $$\pi$$   | `\pi`| $$\rho$$   | `\rho`  |   $$\sigma$$   | `\sigma`| $$\tau$$   | `\tau`  |
|   $$\upsilon$$   | `\upsilon`| $$\phi$$   | `\phi`  |   $$\chi$$   | `\chi`| $$\psi$$   | `\psi`  |
|   $$\omega$$   | `\omega`| $$\Gamma$$   | `\Gamma`  |   $$\Delta$$   | `\Delta`| $$\Theta$$   | `\Theta`  |
|   $$\Lambda$$   | `\Lambda`| $$\Xi$$   | `\Xi`  |   $$\Pi$$   | `\Pi`| $$\Sigma$$   | `\Sigma`  |
|   $$\Upsilon$$   | `\Upsilon`| $$\Phi$$   | `\Phi`  |   $$\Psi$$   | `\Psi`| $$\Omega$$   | `\Omega`  |


I also created the list of symbols table used in the [Mathematics for Machine Learning](https://mml-book.github.io/) book, which is a great LaTex reference and can be accessed at:

- [Jupyter Notebook Version](https://colab.research.google.com/drive/15cQSy8AvU_0ChtNfYaW_Wqfj_dgPv_Lq)
- [Overleaf Version](https://www.overleaf.com/read/mnzgdyrsjfsk)

$
\renewcommand{\vec}[1]{\mathbf{#1}} % vector bf: boldface
\newcommand{\mat}[1]{\mathbf{#1}} % matrix
\renewcommand{\T}{^\top} % transpose
\newcommand{\inv}{^{-1}} % inverse
\newcommand{\set}[1]{\mathcal{#1}} % set cal: calligraphic letters
\renewcommand{\dim}{\mathrm{dim}} % dimension, rm: roman typestyle
\newcommand{\rank}{\mathrm{rk}} % rank
\newcommand{\determ}[1]{\mathrm{det}(#1)} % determinant
\renewcommand{\d}{\mathrm{d}}
\newcommand{\id}{\mathrm{id}} % identity mapping
\newcommand{\kernel}{\mathrm{ker}} % kernel/nullspace
\newcommand{\img}{\mathrm{Im}} % image
\newcommand{\idx}[1]{(#1)}
\newcommand{\genset}[1]{\mathrm{span}[#1]} % generating set
\newcommand{\tensor}[1]{\mathbb{#1}} % tensor
\newcommand{\tr}{\text{tr}} % trace
\newcommand{\pdiffF}[2]{\frac{\partial #1}{\partial #2}}
\newcommand{\diffF}[2]{\frac{\d #1}{\d #2}}
\newcommand{\lag}{\mathfrak{L}} % lagrangian
\newcommand{\lik}{\mathcal{L}} % likelihood
\newcommand{\var}{\mathbb{V}} % variance
\newcommand{\E}{\mathbb{E}} % expectation
\DeclareMathOperator{\cov}{Cov} % covariance
\newcommand\ci{\perp\kern-5pt \perp} % conditional independence
\newcommand\given{\vert} % given
% Gaussian distribution
\newcommand{\gauss}[2]{\mathcal{N}\big(#1,#2\big)}
% other distributions
\newcommand{\Ber}{\text{Ber}}
\newcommand{\Bin}{\text{Bin}}
\newcommand{\Beta}{\text{Beta}}
$

|Symbol | Typical Meaning |
|-------|-----------------|
|$a,b,c, \alpha,\beta,\gamma$                    |Scalars are lowercase|
|$\vec x,\vec y,\vec z$                       |Vectors are bold lowercase|
|$\mat A,\mat B,\mat C$                      |Matrices are bold uppercase|
|$\vec x \T , \mat A \T$                      |Transpose of a vector or matrix|
|$\mat A\inv$                                |Inverse of a matrix|
|$\langle \vec x, \vec y\rangle$                |Inner product of $\vec x$ and $\vec y$|
|$\vec x \T \vec y$                             |Dot product of $\vec x$ and $\vec y$|
|$B = (\vec b_1, \vec b_2, \vec b_3)$           |(Ordered) tuple|
|$\mat B = [\vec b_1, \vec b_2, \vec b_3]$          |Matrix of column vectors stacked horizontally|
|$\set B = \{\vec b_1, \vec b_2, \vec b_3\}$        |Set of vectors (unordered)|
|$\mathbb Z,\mathbb N$ |Integers and natural numbers, respectively|
|$\mathbb R,\mathbb C$ |Real and complex numbers, respectively|
|$\mathbb R^n$         |$n$-dimensional vector space of real numbers|
|$\forall x$           |Universal quantifier: for all $x$|
|$\exists x$           |Existential quantifier: there exists $x$|
|$a := b$              |$a$ is defined as $b$|
|$a =:b$               |$b$ is defined as $a$|
|$a\propto b$          |$a$ is proportional to $b$, i.e., $a =\text\{constant\}\cdot b$|
|$g\circ f$            |Function composition: $g$ after $f$|
|$\iff$                |If and only if|
|$\implies$            |Implies|
|$\set A, \set C$      |Sets|
|$a \in \set A$        |$a$ is an element of set $\set A$|
|$\emptyset$           |Empty set|
|$\set A\setminus \set B$ |$\set A$ without $\set B$: the set of elements in $\set A$ but not in $\set B$|
|$D$                   |Number of dimensions; indexed by $d=1,\dots,D$|
|$N$                   |Number of data points; indexed by $n=1,\dots,N$|
|$\mathbf{I}_m$        |Identity matrix of size $m\times m$|
|$\mathbf{0}_{m,n}$    |Matrix of zeros of size $m\times n$|
|$\mathbf{1}_{m,n}$    |Matrix of ones of size $m\times n$|
|$\vec e_i$            |Standard canonical vector (where $i$ is the component that is $1$) |
|$\dim$                |Dimensionality of vector space|
|$\rank(\mat A)$       |Rank of matrix $\mat A$|
|$\img(\Phi)$          |Image of linear mapping $\Phi$|
|$\kernel(\Phi)$       |Kernel (null space) of a linear mapping $\Phi$|
|$\genset{\vec b_1}$   |Span (generating set) of $\vec b_1$|
|$\tr(\mat A)$         |Trace of $\mat A$|
|$\det(\mat A)$        |Determinant of $\mat A$|
|$\| \cdot \|$           |Absolute value or determinant (depending on context)|
|$\|\| {\cdot} \|\|$       |Norm; Euclidean, unless specified|
|$\lambda$             |Eigenvalue or Lagrange multiplier|
|$E_\lambda$           |Eigenspace corresponding to eigenvalue $\lambda$|
|$\vec x \perp \vec y$ |Vectors $\vec x$ and $\vec y$ are orthogonal|
|$V$            |Vector space|
|$V^\perp$            |Orthogonal complement of vector space $V$|
|$\sum_{n=1}^N x_n$            |Sum of the $x_n$: $x_1 + \dotsc + x_N$|
|$\prod_{n=1}^N x_n$           |Product of the $x_n$: $x_1 \cdot\dotsc \cdot x_N$|
|$\vec \theta$           |Parameter vector|
|$\pdiffF{f}{x}$           |Partial derivative of $f$ with respect to $x$|
|$\diffF{f}{x}$           |Total derivative of $f$ with respect to $x$|
|$\nabla $            |Gradient|
|$f_* = \min_x f(x)$            |The smallest function value of $f$|
|$x_* \in \arg\min_x f(x)$      | The value $x_*$ that minimizes $f$ (note: $\arg\min$ returns a set of values)|
|$\lag$            |Lagrangian|
|$\lik$           |Negative log-likelihood|
|$\binom{n}{k}$           |Binomial coefficient, $n$ choose $k$|
|$\var_X[\vec x]$            |Variance of $\vec x$ with respect to the random variable $X$|
|$\E_X[\vec x]$            |Expectation of $\vec x$ with respect to the random variable $X$|
|$\cov_{X,Y}[\vec x, \vec y]$            |Covariance between $\vec x$ and $\vec y$.|
|$X \ci Y \given Z$            |$X$ is conditionally independent of $Y$ given $Z$|
|$X\sim p$            |Random variable $X$ is distributed according to $p$|
|$\gauss{\mat \mu}{\mat \Sigma}$            |Gaussian distribution with mean $\vec \mu$ and covariance $\mat \Sigma$ |
|$\Ber(\mu)$            |Bernoulli distribution with parameter $\mu$|
|$\Bin(N, \mu)$           |Binomial distribution with parameters $N, \mu$|
|$\Beta(\alpha, \beta)$           |Beta distribution with parameters $\alpha, \beta$|


A more complete LaTex cheatsheet can be accessed [here](https://wch.github.io/latexsheet/).