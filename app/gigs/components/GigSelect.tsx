import Select,{StylesConfig} from 'react-select';

interface GigSelectProps {
    options: any;
    selectedOption: any;
    setSelectedOption: any;
}

const customStyles:StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: '1px solid #ccc',
        borderRadius:'25px',
        padding:'4px',
        outline:'none'
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: '#8A99AF',
    }),
};
const  GigSelect = ({options, selectedOption, setSelectedOption}:GigSelectProps) =>{
    return(
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            placeholder={`${selectedOption}`}
        />
    )
}

export default GigSelect;