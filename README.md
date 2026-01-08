# Secure Multi-Layer Network Project

## Overview

The **Secure Multi-Layer Network Project** is an Information Systems Capstone project designed to model a modern enterprise network environment with a strong emphasis on **security, segmentation, and controlled access**. The project demonstrates how multiple systems—firewalls, domain services, applications, and databases—can be securely integrated using industry-standard tools and best practices.

The environment is fully virtualized and consists of **segmented network layers**, centralized authentication, a secure web application, and a protected database tier. Security validation is performed through penetration testing and vulnerability scanning.

---

## Project Objectives

- Design and deploy a **three-layer segmented network architecture**
- Implement **centralized identity and access management**
- Secure application-to-database communication
- Enforce network isolation using **multiple firewalls**
- Perform penetration testing and document security posture
- Demonstrate enterprise-ready infrastructure design

---

## Network Architecture

The system is divided into **three isolated network layers**:

1. **External Network**
    - Represents the public internet
    - Limited access into internal systems

2. **Internal Network**
    - Domain-joined user workstations
    - Node.js web application server
    - Domain services

3. **Private Network**
    - Highly restricted
    - Hosts the MongoDB database
    - Accessible only through controlled firewall rules

Two **OPNsense firewalls** enforce segmentation and routing between layers.

---

## Virtual Machine Inventory

### Core Virtual Machines

| VM | Operating System | Purpose |
|---|---|---|
| Firewall 1 | OPNsense | External ↔ Internal network security |
| Firewall 2 | OPNsense | Internal ↔ Private network security |
| Domain Controller | Windows Server 2025 | Active Directory, DNS, authentication |
| Web Server | Ubuntu Server LTS | Node.js web application |
| Database Server | Ubuntu Server LTS | MongoDB data storage |
| Client Workstation | Windows | Domain-joined user testing |

---

## Technologies Used

### Infrastructure & Networking
- **Windows Server 2025**
- **Hyper-V**
- **OPNsense Firewall**

### Identity & Access
- **Active Directory Domain Services (AD DS)**
- **DNS**

### Application & Data
- **Node.js**
- **MongoDB**

### Security & Testing
- **Wireshark** – Packet analysis
- **Nmap** – Network scanning
- **Nessus Essentials** – Vulnerability assessment

---

## Security Design

- Network segmentation enforced by **dual firewalls**
- No direct access to the private database network
- Domain-based authentication for internal users
- Restricted firewall rules and minimal exposed services
- Penetration testing to validate isolation and defenses
- Backup and recovery planning for critical data

---

## Repository Structure

- Baseline_docs/
- Docs/
    - configurations/
    - diagrams/
    - other/
    - pen_testing/
    - resources/
- Website/
    - back-end/
    - front-end/
- README.md

---

## Project Status

**In Progress**  
This repository is actively used for development, documentation, and testing as part of an academic Capstone project.

---

## Disclaimer

This project is built **for educational purposes only**.  
All security testing is conducted in an isolated lab environment on systems owned or authorized for testing.

---

## Acknowledgements

AI tools are used to assist with:
- Documentation drafting
- Troubleshooting and debugging
- Generating test data for application development

---

## Author

**William A. Skinner**  
Information Systems Capstone Project
