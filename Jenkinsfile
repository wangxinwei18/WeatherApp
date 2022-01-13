pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                 sh 'cd ./script/'
                 sh 'chmod +x stop-app.sh'
                 sh 'cd ..'
                 sh './scripts/stop-app.sh'
                 sh './scripts/start-app.sh'
             }
        }
    }
}
