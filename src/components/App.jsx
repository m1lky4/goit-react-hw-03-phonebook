import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  handleParentStateChange = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(lowerCaseFilter);
    });
  };
   handleDeleteContact = (contactId) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook
          onNewContact={this.handleParentStateChange}
          contacts={this.state.contacts}
        />
        <Contacts
          filteredContacts={this.getFilteredContacts()}
          handleFilterChange={this.handleFilterChange}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
