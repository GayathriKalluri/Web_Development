export default function getMatchingTripsArr(arr,keyword)
{
    return arr.filter(function(trip){
        return trip.description.toLowerCase().includes(keyword)
    })
}
//we can only have default export statement if we have multiple we might get error
