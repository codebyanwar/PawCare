const ServiceDetailsLoader = async ({params})=>{
    const res = await fetch('/Services.json');

    if(!res.ok){
        throw new Response("Faild to load services", {status: res.status});
    }

    const services = await res.json();
    const service = services.find((data) => data.serviceId === Number(params.id));

    if(!service){
        throw new Response ("Faild to load services", {status: 404});
    }

    return service;
}

export default ServiceDetailsLoader;