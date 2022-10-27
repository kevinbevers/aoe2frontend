import {useState} from 'react'
import {Combobox} from '@headlessui/react'
import {useQuery} from "@tanstack/react-query";
import {fetchProfile, fetchProfiles} from "../helper/api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LocalSearch({className, placeholder, query, setQuery}) {
    const [selectedPerson, setSelectedPerson] = useState(null)
    const router = useRouter()

    // const profiles = useQuery(
    //     ['profiles', query],
    //     async (context: any) => {
    //         if (query?.length > 2) {
    //             return await fetchProfiles({
    //                 ...context,
    //                 search: query,
    //             });
    //         }
    //         return { profiles: [] };
    //     }, {
    //         keepPreviousData: true,
    //     });

    const navigateToProfile = (profile) => {
        // console.log('navigateToProfile', profile);
        // router.push(`/profile/${profile.profileId}`);
        // (document.activeElement as any)?.blur();
    };

    // console.log(profiles?.data?.profiles);

    return (
        <Combobox as="div" value={selectedPerson} onChange={navigateToProfile}>
            <div className={`relative mt-1 ${className}`}>
                <Combobox.Button
                    className="absolute pointer-events-none inset-y-0 left-1 flex items-center rounded-r-md px-2 focus:outline-none">
                    <FontAwesomeIcon className="w-3.5 text-gray-400" icon={faSearch}/>
                </Combobox.Button>

                <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-8 pr-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person: any) => person?.name}
                    value={query}
                    placeholder={placeholder}
                />
            </div>
        </Combobox>
    )
}
