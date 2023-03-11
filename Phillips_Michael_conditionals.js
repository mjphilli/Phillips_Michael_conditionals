//using 24 hour time rather than parsing AM/PM from input string for the time being.
//just using whole hours

function reward(time, day){
    var evenTreats = ["ice cream", "cookies", "candy"], oddTreats = ["hot chocolate", "tea", "cake"], treat;
    if (time < 10)//before 10am
    {
        console.log("latte");
    }
    else if (time >= 10 && time < 15)//between 10am-3pm
    {
        console.log("hot chocolate");
    }
    else if (time >= 15 && time < 18)//between 3pm-6pm
    {
        if(time % 2 == 0)
        {
            treat = evenTreats[Math.floor(Math.random() * evenTreats.length)];
            if(treat == "ice cream")
            {
                console.log("randomized treat is " + iceCreamWednesday(day) + " because the time is even");
            }
            else
            {
                console.log("randomized treat is " + treat);
            }
        }
        else
        {
            console.log("randomized treat is " + oddTreats[Math.floor(Math.random() * oddTreats.length)] +" because the time is odd");
        }
    }
    else if (time >= 18 && time <= 22)//between6pm-10pm
    {
        console.log(iceCreamWednesday(day));
    }
    else if (time > 22)//after 10pm
    {
        console.log("go to sleep");
    }
}

function iceCreamWednesday(day){
    if(day == "Wednesday")
    {
        return "strawberry ice cream because it's Wednesday";
    }
    else
    {
        return "vanilla ice cream because it's not Wednesday";
    }
}

reward(8);//8am
reward(12);//12pm
reward(18, "Wednesday");//6pm
reward(21, "Monday");//9pm
reward(23);//11pm
reward(15, "Tuesday");//3pm
reward(16, "Wednesday");//4pm
reward(16, "Thursday");//4pm