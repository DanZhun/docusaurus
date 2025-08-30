---
title: 'Floyd Cycle | 龜兔賽跑算法'
label: 'Floyd Cycle'
sidebar_position: 3
---

Floyd Cycle | 龜兔賽跑算法
===

核心概念
---

- 快慢指針：

    - 慢指針 slow：每次走一步

    - 指針 fast：每次走兩步

- 相遇原理：

    - 無循環 → fast 會先到終點 (None)

    - 有循環 → fast 最終會追上 slow（因為在循環內，快指針每次縮短與慢指針的距離）

