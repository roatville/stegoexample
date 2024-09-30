import FormRadio from "./FormRadio";

const ChooseFlow = ({ onChoice }) => (
    <fieldset form="form" className="grid gap-4 mb-32">
        <p className="mb-4">Choose</p>
        <FormRadio
            name="chooseFlow"
            value="hide"
            label="Create a secret image for Person B with password"
            onChange={onChoice}
        />
        <FormRadio
            name="chooseFlow"
            value="find"
            label="Retrieve the information & files from an image which is sent by Person A"
            onChange={onChoice}
        />
    </fieldset>
);

export default ChooseFlow;
