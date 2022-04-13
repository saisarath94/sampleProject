pipeline {
    agent any

    tools {Nodejs 'Nodejs'}

    stages {
        stage('cloning from git'){
            steps {
                git 'https://github.com/saisarath94/sampleProject.git'
            }
        }
        stage('install dependencies'){
            steps{
               sh 'npm install' 
            }
        }
        stage('Build') {
            steps {
                echo 'Build Application'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing phase'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy Application'
            }
        }
    }
    post {
        success {
            emailext body: 'pipeline success', subject: 'pipeline status ', to: 'saisarath94@gmail.com'
        }
        failure {
            emailext body: 'pipeline failure', subject: 'pipeline status ', to: 'saisarath94@gmail.com'
        }
    }
}
