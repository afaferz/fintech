<template>
    <v-dialog v-model="openModal" width="500">
        <v-card class="pa-5" rounded="0">
            <v-card-text>
                <!-- Registrar -->
                <v-row v-if="type === 'register'">
                    <v-col cols="12">
                        <div class="text-center">
                            <h4
                                class="primary--text text-center my-2"
                                :class="
                                    $vuetify.breakpoint.smAndDown
                                        ? 'subheading'
                                        : 'headline'
                                "
                            >
                                <type-writer
                                    :start-at-begin="true"
                                    text="Junte-se a nós! Crie sua"
                                    :delay="70"
                                    :order="1"
                                />
                                <b>
                                    <type-writer
                                        text="conta"
                                        :delay="70"
                                        :order="2"
                                    />
                                </b>
                            </h4>

                            <v-btn
                                fab
                                icon
                                class="close"
                                @click="$emit('close')"
                            >
                                <v-icon large color="primary"> &times; </v-icon>
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <form
                            :class="{ 'was-validated': null }"
                            @submit.prevent="doSignup"
                        >
                            <v-text-field
                                v-model.trim="signup.username"
                                maxlength="10"
                                :class="
                                    !!serverErrors.username &&
                                    $vuetify.breakpoint.smAndDown
                                        ? 'mb-3'
                                        : ''
                                "
                                class="my-0 py-0"
                                :error="!!serverErrors.username"
                                :error-messages="serverErrors.username"
                                label="Usuário"
                            />
                            <v-text-field
                                v-model="signup.password"
                                :append-icon="
                                    showPassword.show2
                                        ? 'mdi-eye'
                                        : 'mdi-eye-off'
                                "
                                :type="showPassword.show2 ? 'text' : 'password'"
                                class="my-0 py-0"
                                :error="!!serverErrors.password"
                                :error-messages="serverErrors.password"
                                label="Crie uma senha"
                                @enter="doSignup"
                                @click:append="
                                    showPassword.show2 = !showPassword.show2
                                "
                            />
                            <v-btn
                                outlined
                                block
                                color="primary"
                                type="submit"
                                class="mt-3"
                            >
                                Avançar
                            </v-btn>
                        </form>
                    </v-col>
                </v-row>

                <!-- Fazer Login -->
                <v-row v-if="type === 'login'">
                    <v-col cols="12">
                        <div class="text-center">
                            <h4
                                class="primary--text text-center my-2"
                                :class="
                                    $vuetify.breakpoint.smAndDown
                                        ? 'subheading'
                                        : 'headline'
                                "
                            >
                                <type-writer
                                    :start-at-begin="true"
                                    text="Faça "
                                    :delay="70"
                                    :order="1"
                                />
                                <b>
                                    <type-writer
                                        text="Login"
                                        :delay="70"
                                        :order="2"
                                    />
                                </b>
                            </h4>

                            <v-btn
                                fab
                                icon
                                class="close"
                                @click="$emit('close')"
                            >
                                <v-icon large color="primary"> &times; </v-icon>
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <form @submit.prevent="doLogin">
                            <v-text-field
                                v-model.trim="login.username"
                                maxlength="10"
                                class="my-0 py-0"
                                :error="!!serverErrors.username"
                                :error-messages="serverErrors.username"
                                label="Usuário"
                                name="usuario"
                            />

                            <v-text-field
                                v-model="login.password"
                                :type="showPassword.show1 ? 'text' : 'password'"
                                :append-icon="
                                    showPassword.show1
                                        ? 'mdi-eye'
                                        : 'mdi-eye-off'
                                "
                                :error="!!serverErrors.password"
                                :error-messages="serverErrors.password"
                                label="Senha"
                                name="senha"
                                @enter="doLogin"
                                @click:append="
                                    showPassword.show1 = !showPassword.show1
                                "
                            />

                            <v-row class="mt-4">
                                <v-col cols="12">
                                    <a
                                        class="subheading"
                                        @click="type = 'recovery-password'"
                                    >
                                        Esqueci a senha
                                    </a>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn
                                        outlined
                                        block
                                        color="primary"
                                        type="submit"
                                        class="mt-3"
                                    >
                                        Entrar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-col>
                </v-row>

                <!-- Recuperar senha -->
                <v-row v-if="type === 'recovery-password'">
                    <v-col cols="12">
                        <div class="text-center">
                            <h4
                                class="primary--text text-center my-2"
                                :class="
                                    $vuetify.breakpoint.smAndDown
                                        ? 'subheading'
                                        : 'headline'
                                "
                            >
                                <type-writer
                                    :start-at-begin="true"
                                    text="Recuperar sua"
                                    :delay="70"
                                    :order="1"
                                />
                                <b>
                                    <type-writer
                                        text="senha"
                                        :delay="70"
                                        :order="2"
                                    />
                                </b>
                            </h4>

                            <v-btn
                                fab
                                icon
                                class="close"
                                @click="$emit('close')"
                            >
                                <v-icon large color="primary"> &times; </v-icon>
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <form
                            class="mx-auto password-recovery-form"
                            :class="{ 'was-validated': null }"
                            @submit.prevent="sendRecoveryPassword"
                        >
                            <v-text-field
                                v-model.trim="passwordRecovery.email"
                                type="email"
                                class="mt-3 py-0"
                                :error="!!serverErrors.email"
                                :error-messages="serverErrors.email"
                                label="E-mail"
                                autocomplete="off"
                            />

                            <v-btn
                                block
                                outlined
                                color="primary"
                                type="submit"
                                class="mb-4"
                            >
                                Enviar
                            </v-btn>
                        </form>
                    </v-col>
                </v-row>

                <div class="text-center mb-0 mt-3">
                    <p v-show="type != 'login'" class="grey--text">
                        Já possui uma conta?
                        <a @click="type = 'login'">
                            <b>Faça o login</b>
                        </a>
                    </p>
                    <p v-show="type != 'register'" class="grey--text">
                        Ainda não possui conta?
                        <a @click="type = 'register'">
                            <b>Junte-se a nós!</b>
                        </a>
                    </p>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import TypeWriter from "@/components/Custom/TypeWriter";

export default {
    components: {
        TypeWriter
    },
    name: "ModalLogin",
    props: {
        value: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            type: "register",
            signup: {
                password: null,
                username: null
            },
            login: {
                password: null,
                username: null
            },
            passwordRecovery: {
                email: null
            },
            serverErrors: {
                nick: null,
                username: null,
                cpf_cnpj: null,
                password: null,
                type: null,
                email: null,
                email_password: null
            },
            showPassword: {
                show1: false,
                show2: false
            }
        };
    },
    computed: {
        openModal: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        doLogin() {
            console.log("LOGAR");
        },
        doSignup() {
            console.log("REGISTRAR");
            this.$router.push({ name: "register" });
            this.openModal = false;
        },

        async sendRecoveryPassword() {
            console.log("RECUPERAR SENHA");
        }
    }
};
</script>

<style scoped>
.close {
    position: absolute;
    right: 5px;
    top: 0px;
}
</style>
