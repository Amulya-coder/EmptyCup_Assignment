const shortlistElements = document.querySelectorAll('.shortlist');
const shortlistedElements = document.querySelectorAll('.shortlisted');
const card = document.querySelectorAll('.des');
const filter=document.querySelectorAll('.fa-heart')[0];
let selectedCards=[];
let flag=0;

for(let i=0; i<card.length; i++)
{
    selectedCards.push(0);
}

for(let i=0; i<shortlistElements.length; i++)
{
    shortlistElements[i].addEventListener('click', () => {
        if(shortlistElements[i].style.display!="none")
        {
            shortlistElements[i].style.display="none";
            shortlistedElements[i].style.display="block";
            selectedCards[i]=1;
        }
    });

    shortlistedElements[i].addEventListener('click', () => {
        if(shortlistedElements[i].style.display!="none")
        {
            shortlistedElements[i].style.display="none";
            shortlistElements[i].style.display="block";
            selectedCards[i]=0;
        }
    });
}

filter.addEventListener('click',()=>{
    filter.classList.toggle("active");
    for(let i=0; i<card.length; i++)
    {
        console.log(selectedCards[i]);
    }

    if(flag==0)
    {
        for(let i=0; i<selectedCards.length; i++)
        {
            if(selectedCards[i]==0)
            {
                card[i].style.display="none";
            }
        }
        flag=1;
    }
    else
    {
        for(let i=0; i<selectedCards.length; i++)
        {
            card[i].style.display="flex";
        }
        flag=0;
    }
});
