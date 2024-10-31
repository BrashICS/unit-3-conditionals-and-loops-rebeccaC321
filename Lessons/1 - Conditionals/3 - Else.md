# Unit 3 - Conditionals and Loops

## 3.3 - Else

##### ICS3 - Mr. Brash 🐿️

<table>
<tr>
<th>3.3 - In this Lesson:</th>
<th>Unit 3 - Conditionals & Loops</th>
</tr>
<tr>
<td td valign="top" style="height: 100px;padding-right:50px">

- [The `Else` Statement](#lesson)
- [Examples](#examples)
- [Practice Time!](#practice-time)
    - [Part 1 - ???](#part-1)
    - [Part 2 - ???](#part-2)
    
</td>
<td td valign="top" style="height: 100px;padding-right:50px">

- [README](../../README.md)
- [3.1 - If](./1%20-%20IF.md)
- [3.2 - Else-If](./2%20-%20Else-If.md)
- [3.3 - Else](./3%20-%20Else.md)
- [3.4 - While](../2%20-%20Loops/4%20-%20While.md)
- [3.5 - Do...While](../2%20-%20Loops/5%20-%20Do-While.md)
- [3.6 - For](../2%20-%20Loops/6%20-%20For.md)

</td></tr></table>

Here's the scenario: 
> You ask the user to select from a menu by entering a _number_ between 1 and 5.  
They don't select from the proper range or they enter a _word_. Perhaps they don't enter anything at all and just click OK.

❓ How would you handle that in code? 

---

### Lesson:

So far, we know how to handle the _correct_ responses:

<table>
<tr>
<td width="60%">

```JS
if (selection == 1) {
    // Code here
} else if (selection == 2) {
    // Code here
} else if (selection == 3) {
    // Code here
}
```

</td>

<td>

But what about all the other possibilities?

</td>
</tr>
</table>