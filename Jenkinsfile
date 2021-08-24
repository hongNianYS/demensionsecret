
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'bash /auto_build.sh'
        sh 'bash /auto_deploy.sh\''
      }
    }
  }
  post {
        always {
            echo 'I will always say Hello again!'
            
            emailext (
                body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}",
                to: '1870184339@qq.com'
            )
            
        }
    }
}