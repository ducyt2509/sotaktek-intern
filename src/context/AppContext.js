import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const tasks = [
    {
        id: 1,
        name: "gyms",
        date: "2023-06-02",
        desc: "Ăn uống trước khi tập",
        piority: "Normal",


    },

    {
        id: 3,
        name: "Làm bài tập",
        date: "2023-06-04",
        desc: "Xem kiến thức đã",
        piority: "Normal",


    },
    {
        id: 2,
        name: "Học Nodejs",
        date: "2023-06-03",
        desc: "Học base js",
        piority: "High",

    },

]
function AppProvider(props) {

    const [data, setData] = useState(tasks);

    useEffect(() => {
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        localStorage.setItem('tasks', JSON.stringify(data));
    }, [data]);
    return <AppContext.Provider value={{ data, setData }} {...props} ></AppContext.Provider>

}

function useApp() {
    const context = useContext(AppContext)
    if (typeof (context) === 'undefined') throw new Error("Please using AppProvider")
    return context
}

export { useApp, AppProvider }