                    
  <script setup lan="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
</script>

<template>
    <h2 class="text-2xl font-semibold text-center my-5">Presets</h2>

    <div class="flex flex-wrap">
        <form class="grid gap-5 min-w-96 max-w-3xl mx-auto my-5">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Signup</h1>
                <p class="text-gray-600">Please fill out this form to create a new account.</p>
            </div>

            <div class="grid gap-2 grid-cols-1">
                <div class="grid gap-1">
                    <Label for="name">Your Name</Label>
                    <Input type="text" name="name" id="name" />
                </div>
            </div>

            <div class="grid gap-2 grid-cols-1">
                <div class="grid gap-1">
                    <Label for="email">Your Email</Label>
                    <Input type="email" name="email" id="email" />
                </div>
            </div>

            <div class="grid gap-2 grid-cols-2">
                <div class="grid gap-1">
                    <Label for="password">Your Password</Label>
                    <Input type="password" name="password" id="password" />
                </div>

                <div class="grid gap-1">
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" />
                </div>
            </div>

            <Button>Sign Up</Button>
        </form>

        <form class="grid gap-5 min-w-96 max-w-3xl mx-auto my-5">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Login</h1>
                <p class="text-gray-600">Please login to continue</p>
            </div>

            <div class="grid gap-2 grid-cols-1">
                <div class="grid gap-1">
                    <Label for="email">Your Email</Label>
                    <Input type="email" name="email" id="email" />
                </div>
            </div>

            <div class="grid gap-2 grid-cols-1">
                <div class="grid gap-1">
                    <Label for="password">Your Password</Label>
                    <Input type="password" name="password" id="password" />
                </div>
            </div>

            <Button>Login</Button>
        </form>

    </div>
</template>