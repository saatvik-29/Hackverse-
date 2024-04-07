import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractABI from './contractABI.json'; // Ensure the ABI file path is correct

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Replace with your contract's address

const App = () => {
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initContract = async () => {
            if (window.ethereum) {
                try {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    await provider.send("eth_requestAccounts", []);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(contractAddress, contractABI, signer);
                    setContract(contract);
                } catch (error) {
                    console.error("Error initializing contract:", error);
                }
            } else {
                console.log("Ethereum object not found. Please install MetaMask.");
            }
        };

        initContract();
    }, []);

    const createInsurance = async (insuredBy, reason, amount) => {
        try {
            const tx = await contract.createInsurance(insuredBy, reason, ethers.utils.parseUnits(amount, 'ether'));
            await tx.wait();
            alert('Insurance created successfully');
        } catch (error) {
            console.error('Error creating insurance:', error);
            alert(error.message);
        }
    };

    const approveInsurance = async (id) => {
        try {
            const tx = await contract.approveInsurance(id);
            await tx.wait();
            alert('Insurance approved successfully');
        } catch (error) {
            console.error('Error approving insurance:', error);
            alert(error.message);
        }
    };

    const disapproveInsurance = async (id) => {
        try {
            const tx = await contract.disapproveInsurance(id);
            await tx.wait();
            alert('Insurance disapproved successfully');
        } catch (error) {
            console.error('Error disapproving insurance:', error);
            alert(error.message);
        }
    };

    const registerUser = async (address, isDoctor) => {
        try {
            const tx = await contract.register(address, "defaultName", "defaultPassword", isDoctor);
            await tx.wait();
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            alert(error.message);
        }
    };

    if (!contract) return <div>Loading...</div>;

    return (
        <div className="App">
            <InsuranceForm title="Create Insurance" onSubmit={createInsurance} />
            <InsuranceForm title="Approve Insurance" onSubmit={approveInsurance} />
            <InsuranceForm title="Disapprove Insurance" onSubmit={disapproveInsurance} />
            <RegistrationForm onSubmit={registerUser} />
        </div>
    );
};

const InsuranceForm = ({ title, onSubmit }) => {
    const [id, setId] = useState('');
    const [insuredBy, setInsuredBy] = useState('');
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "Create Insurance") {
            onSubmit(insuredBy, reason, amount);
        } else {
            onSubmit(id);
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                {title === "Create Insurance" ? (
                    <>
                        <input type="text" value={insuredBy} onChange={(e) => setInsuredBy(e.target.value)} placeholder="Insured By Address" required />
                        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" required />
                        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                    </>
                ) : (
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Insurance ID" required />
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const RegistrationForm = ({ onSubmit }) => {
    const [address, setAddress] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(address, isDoctor);
    };

    return (
        <div>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
                <label>
                    <input type="checkbox" checked={isDoctor} onChange={(e) => setIsDoctor(e.target.checked)} /> Is Doctor
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default App;
