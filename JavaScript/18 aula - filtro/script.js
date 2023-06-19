function myfunction()
{
    let input, ul, li, a, filtro, i
    input = document.getElementById("myinput");
    filtro = input.value.toUpperCase();
    ul = document.getElementById("myul");
    li = ul.getElementsByTagName("li");

    for( i = 0;i < li.length;i++ )
    {
        a = li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
        {
            li[i].style.display =''
        }
        else
        {
            li[i].style.display = 'none'
        }
    }
}