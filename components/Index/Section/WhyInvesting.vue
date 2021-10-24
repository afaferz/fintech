<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" class="text-center my-8">
                <span
                    class="
                        text-h3
                        mx-auto
                        font-weight-black font-size
                        white--text
                    "
                >
                    Por que é importante o controle financeiro
                </span>
            </v-col>
            <v-col
                v-for="(item, index) in whyInvestingInformations"
                :key="item.title"
                cols="12"
                :md="12 / whyInvestingInformations.length"
                align-self="start"
            >
                <v-card class="mx-auto" max-width="344" elevation="6" shaped>
                    <div class="d-flex justify-center py-4 px-3">
                        <v-avatar size="150" tile>
                            <v-img
                                :src="item.image"
                                height="100%"
                                width="100%"
                                class="text-center"
                            />
                        </v-avatar>
                    </div>

                    <v-card-title
                        class="font-style font-weight-bold primary--text"
                    >
                        {{ item.title.toUpperCase() }}
                    </v-card-title>

                    <v-card-subtitle> {{ item.subtitle }} </v-card-subtitle>

                    <v-card-actions>
                        <v-btn
                            color="primary lighten-2"
                            text
                            @click="item.action.func"
                        >
                            {{ item.action.title }}
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show[index].value = !show[index].value"
                        >
                            <v-icon>
                                {{
                                    show[index].value
                                        ? "mdi-chevron-up"
                                        : "mdi-chevron-down"
                                }}
                            </v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show[index].value">
                            <v-divider></v-divider>

                            <v-card-text>
                                {{ item.textInformations }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            whyInvestingInformations: [
                {
                    title: "Lorem ipsum 1",
                    subtitle: "Lorem ipsum dolor set Lorem ipsum",
                    textInformations:
                        "1 - I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ",
                    action: {
                        title: "Simule sua finança",
                        func: () => {
                            console.log("Simule sua finança");
                        }
                    },
                    image: "/img/why-investing/calculator.svg"
                },
                {
                    title: "Lorem ipsum 2",
                    subtitle: "Lorem ipsum dolor set Lorem ipsum",
                    textInformations:
                        "2 - I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ",
                    action: {
                        title: "Entenda o cálculo",
                        func: () => {
                            console.log("Entenda o cálculo");
                        }
                    },
                    image: "/img/why-investing/paper-and-pencil.svg"
                },
                {
                    title: "Lorem ipsum 3",
                    subtitle: "Lorem ipsum dolor set Lorem ipsum",
                    textInformations:
                        "3 - I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ",
                    action: {
                        title: "Consulte seu crédito",
                        func: () => {
                            console.log("Consulte seu crédito");
                        }
                    },
                    image: "/img/why-investing/math-calc.svg"
                },
                {
                    title: "Lorem ipsum 4",
                    subtitle: "Lorem ipsum dolor set Lorem ipsum",
                    textInformations:
                        "4 - I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ",
                    action: {
                        title: "Entenda",
                        func: () => {
                            console.log("Entenda");
                        }
                    },
                    image: "/img/why-investing/bubble.svg"
                }
            ],
            show: [
                { value: false },
                { value: false },
                { value: false },
                { value: false }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.font-style {
    font-family: "Boing-Bold", sans-serif !important;
    line-height: 1.3;
}
</style>
