export const serviceLoader = async () =>{
    const res = await fetch('/Services.json');

    if(!res.ok){
        throw new Response("Failed to load services", { status: res.status });
    }

    return res.json();
}