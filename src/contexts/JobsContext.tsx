import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Jobs {
    id: string;
    companyName: string;
    serviceName: string;
    description: string;
    main_skill: string;
    other_skills: string;
    salary: string;
    end_date: number;
    created_at: string;
}

interface JobsContextType {
    jobs: Jobs[]
}

interface JobsProviderProps {
    children: ReactNode
}

export const JobsContext = createContext({} as JobsContextType)

export function JobsProvider({ children }: JobsProviderProps) {

    const [jobs, setJobs] = useState<Jobs[]>([])

    useEffect(() => {
      api.get('/jobs/')
      .then(response => setJobs(response.data))
    }, [])

    return(
        <JobsContext.Provider value={{ jobs }}>
            { children }
        </JobsContext.Provider>
    )
}
