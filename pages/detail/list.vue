<template>
    <v-container>
        營隊清單
        <ul>
            <li v-for="camp in originData" :key="camp.name">{{ camp.name }}
                <v-btn @click='checkIssue(camp.name)'>Check</v-btn>
            </li>
        </ul>
    </v-container>
</template>

<script>
import originData from '../../assets/camp_data/111summer.json';
import axios from "axios";

export default {
    name: "list",
    data() {
        return {
            originData
        }
    },
    methods: {
        async checkIssue(name) {
            const issueRes = await axios.get(`https://api.github.com/search/issues?q=${encodeURIComponent(name + ' is:issue is:open repo:campsearch/website label:rating')}`, {
                headers: {
                    Authorization: 'Bearer ' + process.env.GITHUB_ACCESS_TOKEN
                },
                timeout: 20000,
            });
            let issue = issueRes.data
            console.log("有沒有找到? ")
            console.log(issue.items.length)

            if (issue.items.length === 0) {
                const createIssueRes = await axios.post(`https://api.github.com/repos/campsearch/website/issues`, JSON.stringify({
                    title: name,
                    labels: [
                        'rating'
                    ],
                    body: "https://camp.hsuan.app/detail/" + name
                }), {
                    headers: {
                        Authorization: 'Bearer ' + process.env.GITHUB_ACCESS_TOKEN
                    },
                    timeout: 20000,
                });
                console.log(createIssueRes.headers["x-ratelimit-remaining"])
            }
        }
    }

}
</script>

<style scoped>

</style>
