# CI/CD Pipeline with Jenkins, GitHub, Docker Hub, Ansible, and Kubernetes

This project demonstrates a fully automated CI/CD pipeline that integrates Jenkins, GitHub webhooks, Docker Hub, and Kubernetes. It automates the containerization of an application, pushes updates to Docker Hub, and deploys it seamlessly to a Kubernetes cluster using Ansible.

## Features
- **CI/CD Automation**: A streamlined CI/CD pipeline implemented using Jenkins and GitHub webhooks.
- **Containerization**: Automatic build and push of Docker images to Docker Hub.
- **Kubernetes Deployment**: Deployment to Kubernetes cluster using Ansible.
- **Service Exposure**: New services are automatically exposed with health checks.
- **Quick Access**: Service URLs are printed for immediate access to the deployed application.

## Directory Structure

```bash
.
├── .gitignore               # Files to ignore in Git
├── Dockerfile               # Dockerfile to containerize the application
├── ansible/                 # Ansible playbooks and roles
│   ├── ansible.cfg          # Ansible configuration file
│   ├── inventory.ini        # Ansible inventory file
│   ├── playbook.yml         # Main Ansible playbook for deployment
│   └── roles/               # Ansible roles
│       ├── setup-environment/
│       └── setup-k8s-service/
├── jenkins/                 # Jenkins CI configuration
│   └── Jenkinsfile          # Jenkins pipeline definition
├── k8s/                     # Kubernetes configuration files
│   ├── cf.yml               # ConfigMap for Kubernetes
│   ├── dep.yml              # Deployment manifest
│   ├── ns.yml               # Namespace definition
│   ├── runk8s.sh            # Script to apply K8s manifests
│   └── serv.yml             # Service manifest
├── src/                     # Application source code
│   ├── app.js               # Main application logic
│   └── server.js            # Server setup and initialization
├── public/                  # Static files (CSS, JS, etc.)
├── package.json             # Node.js project file
└── README.md                # Project documentation (this file)
```

## Prerequisites

- Jenkins installed and configured with necessary plugins (e.g., GitHub, Docker)
- Docker installed on the build machine
- Kubernetes cluster set up and configured
- Ansible installed on the deployment machine
- GitHub repository for triggering webhooks

## CI/CD Pipeline Workflow

1. **Triggering the Pipeline**:
   - The pipeline is triggered by a webhook from the GitHub repository whenever a new commit is pushed.
   
2. **Containerization**:
   - The application is automatically built into a Docker image using the `Dockerfile`.
   - The built image is pushed to Docker Hub.

3. **Kubernetes Deployment**:
   - Ansible is used to deploy the application to a Kubernetes cluster.
   - The service is exposed, and health checks are performed to ensure the application is running correctly.

4. **Quick Access**:
   - Once deployed, the service URL is printed to the console for immediate access to the application.

## How to Run

### Step 1: Set Up Jenkins Pipeline

- Add a new pipeline project in Jenkins.
- Configure GitHub webhook to trigger the build upon code pushes.
- Ensure Jenkins is connected to Docker and Kubernetes.

### Step 2: Run Ansible Playbook

1. Modify the Ansible `inventory.ini` to reflect the target servers.
2. Execute the playbook to set up the Kubernetes service:
   ```bash
   ansible-playbook -i ansible/inventory.ini ansible/playbook.yml
   ```

### Step 3: Deploy to Kubernetes(Optinal)
   - Run the following command to deploy the application to Kubernetes in case you don't want to use ansible:
1. The Kubernetes YAML files (`dep.yml`, `serv.yml`, etc.) define the deployment.
2. Run the `runk8s.sh` script to apply the Kubernetes manifests:
   ```bash
   bash k8s/runk8s.sh
   ```

### Step 4: Access the Application

Once deployed, the application’s service URL will be printed to the console. Use this URL to access the running service.

## Technologies Used

- **Jenkins**: For CI/CD automation.
- **Docker**: To containerize the application.
- **Docker Hub**: For storing and distributing Docker images.
- **Ansible**: To automate Kubernetes deployment.
- **Kubernetes**: For orchestrating the containerized application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

